# Tool Integration Guide — OKRs & KPIs in Your Stack

How to implement goal-tracking and KPI dashboards using the tools you already have. From free solutions to enterprise platforms.

---

## Quick Decision Matrix

| Team Size | Budget | Recommended Stack |
|-----------|--------|-------------------|
| **5-20 people** | Free-$500/mo | Google Sheets + Notion + Data Studio |
| **20-50 people** | $500-$2K/mo | Notion or Asana + Looker or Metabase |
| **50-250 people** | $2K-$10K/mo | Lattice/15Five + Tableau + Salesforce |
| **250+ people** | $10K+/mo | Enterprise OKR tool + BI platform |

---

## Option 1: Google Sheets (Free — Best for 5-30 People)

**Pros:** Free, familiar, flexible, no learning curve
**Cons:** Manual updates, no automation, doesn't scale past 30 people

### Setup: Company OKR Tracker

**Spreadsheet Structure:**

**Tab 1: Company OKRs**
```
| Quarter | Objective | KR | Owner | Target | Current | % | Status | Last Updated |
|---------|-----------|----|-|--------|---------|---|--------|--------------|
| Q2 2026 | Achieve PMF | Get to 50 customers | CEO | 50 | 23 | 46% | 🟡 | 2026-05-01 |
| Q2 2026 | Achieve PMF | NPS >40 | PM | 40 | 28 | 70% | 🟡 | 2026-05-01 |
| Q2 2026 | Achieve PMF | 80% weekly active | PM | 80% | 45% | 56% | 🟡 | 2026-05-01 |
```

**Tab 2: Department OKRs**
(Same structure, one section per department)

**Tab 3: Weekly Updates**
```
| Week Of | KR | Progress This Week | Blockers | Confidence | Updated By |
|---------|----|--------------------|----------|------------|------------|
| 2026-04-29 | Get to 50 customers | +3 customers | Slow demo bookings | 🟡 | CEO |
```

**Tab 4: Dashboard** (auto-calculated)
- Uses formulas to pull from Tab 1
- Progress bars using conditional formatting
- RAG status icons

### Google Sheets Formulas

**Progress Calculation:**
```
=(Current - Starting) / (Target - Starting)
```

**Status Color:**
```
=IF(Progress>=0.7, "🟢", IF(Progress>=0.4, "🟡", "🔴"))
```

**Conditional Formatting:**
- Green if >70%
- Yellow if 40-70%
- Red if <40%

### Template Download
[Create a template in Google Sheets with tabs above, share in README]

---

## Option 2: Notion (Free-$8/user — Best for 10-100 People)

**Pros:** Flexible, collaborative, beautiful, good for knowledge base
**Cons:** Can get messy, requires discipline, reporting limited

### Setup: Notion OKR Workspace

**Structure:**

```
📁 2026 Goals & OKRs
├── 📄 Company OKRs — Q2 2026
├── 📁 Department OKRs
│   ├── 📄 Sales OKRs
│   ├── 📄 Engineering OKRs
│   ├── 📄 Marketing OKRs
│   └── 📄 Customer Success OKRs
├── 📁 Weekly Check-Ins
│   ├── 📄 Week of 2026-04-29
│   ├── 📄 Week of 2026-05-06
│   └── ...
├── 📊 Dashboard (Database View)
└── 📚 Resources
    ├── 📄 How We Do OKRs
    ├── 📄 OKR Scoring Guide
    └── 📄 Meeting Agendas
```

### Notion Database Setup

**Create a Database: "Company OKRs"**

**Properties:**
- **Name** (Title): Objective or KR
- **Type** (Select): Objective / Key Result
- **Quarter** (Select): Q1 2026, Q2 2026, Q3 2026, Q4 2026
- **Department** (Select): Company, Sales, Engineering, Marketing, CS
- **Owner** (Person): Assigned to
- **Target** (Number): Goal value
- **Current** (Number): Current value
- **Progress** (Formula): `prop("Current") / prop("Target")`
- **Status** (Formula): RAG based on progress
- **Last Updated** (Date)
- **Confidence** (Select): 🟢 🟡 🔴
- **Notes** (Text): Blockers, context

**Formula for Status:**
```
if(prop("Progress") >= 0.7, "🟢 On Track",
   if(prop("Progress") >= 0.4, "🟡 At Risk", "🔴 Off Track"))
```

### Notion Views

**View 1: Company OKRs** (Board by Status)
- Group by: Status (🟢 🟡 🔴)
- Filter: Department = Company

**View 2: All Departments** (Table)
- Group by: Department
- Show: Name, Owner, Progress, Status

**View 3: This Quarter** (Gallery)
- Filter: Quarter = Q2 2026
- Sort by: Progress (ascending, show red items first)

### Weekly Check-In Template

Create a template page: "Weekly Check-In — YYYY-MM-DD"

```markdown
# Weekly Check-In — May 6, 2026

## 🎯 OKR Progress

### Objective 1: [Name]
- **KR1:** [Name]
  - Progress: X% → Y% (+Z% this week)
  - Confidence: 🟢🟡🔴
  - This Week: [What happened]
  - Next Week: [What's planned]
  - Blockers: [Any?]

[Repeat for all KRs]

## 🏆 Wins This Week
- [Win 1]
- [Win 2]

## 🚧 Blockers
- [Blocker 1] — Owner: [Name] — ETA: [Date]

## 📅 Next Week Priorities
- [ ] Priority 1
- [ ] Priority 2
- [ ] Priority 3
```

Duplicate this template every Monday.

---

## Option 3: Asana (Paid $10-$25/user — Best for 20-200 People)

**Pros:** Task management + OKRs, great for execution, built-in automation
**Cons:** Paid tool, can be complex, not purpose-built for OKRs

### Setup: Asana Goals Feature

Asana has a built-in "Goals" feature (available on Business tier and above).

**Structure:**

```
Company
├── Mission
└── Goals (Objectives)
    ├── Objective 1
    │   ├── KR 1 (linked to projects/tasks)
    │   ├── KR 2
    │   └── KR 3
    └── Objective 2
        └── ...
```

**How to Set Up:**

1. Go to "Goals" in sidebar
2. Create "Company Goals" for the quarter
3. Add Objectives as top-level goals
4. Add KRs as sub-goals
5. Link KRs to projects/tasks that drive them

**Automation:**
- Auto-update KR progress based on task completion
- Notify owners when KR falls below 40%
- Weekly reminder to update progress

**Dashboard:**
Asana's built-in reporting shows:
- Progress by goal
- Status (on track, at risk, off track)
- Owner view
- Timeline view

---

## Option 4: Lattice / 15Five (Paid $8-$15/user — OKR-Specific Tools)

**Pros:** Purpose-built for OKRs, great UX, performance management integration
**Cons:** Expensive for small teams, requires commitment

**Best for:** 50-500 person companies that want a dedicated OKR platform

### Features:

- **Cascading OKRs:** Automatic roll-up from individual → team → company
- **Check-ins:** Weekly progress updates with prompts
- **Alignment map:** Visual tree showing how OKRs connect
- **Scoring:** Built-in 0.0-1.0 scoring with grading guides
- **Integrations:** Connect to Slack, Salesforce, Jira
- **Analytics:** Track completion rates, engagement, trends

**When to Use:**
- 50+ employees
- Formal performance management process
- Budget for dedicated tools ($500-$2K/month)

---

## KPI Dashboard Tools

### Option 1: Google Data Studio (Free)

**Best for:** 5-50 people with Google Sheets as data source

**Setup:**
1. Connect Data Studio to your Google Sheets OKR tracker
2. Create charts:
   - Scorecard (current value, target, % complete)
   - Bar chart (KRs by progress)
   - Time series (progress over time)
3. Add filters (department, quarter)

**Example Dashboard:**
```
┌────────────────────────────────────────┐
│  Q2 2026 Company OKRs                  │
├────────────────────────────────────────┤
│  Overall Score: 0.72 (🟡 At Risk)     │
│                                        │
│  Objective 1: Achieve PMF              │
│  ████████████░░░░░░░░░░░ 62%          │
│                                        │
│  Objective 2: Build Sales Motion       │
│  ████████████████░░░░░░░ 78%          │
│                                        │
│  Objective 3: Extend Runway            │
│  █████████████████████░░ 86%          │
└────────────────────────────────────────┘
```

**Refresh:** Manual (update Google Sheet, dashboard auto-refreshes)

---

### Option 2: Metabase (Open Source, Free to Self-Host)

**Best for:** 20-200 people with SQL databases (Postgres, MySQL)

**Setup:**
1. Store OKRs in a database table
2. Connect Metabase to database
3. Build SQL queries for dashboards
4. Schedule email reports (weekly)

**Example SQL:**
```sql
SELECT
  objective,
  key_result,
  owner,
  (current_value / target_value) * 100 AS progress_pct,
  CASE
    WHEN (current_value / target_value) >= 0.7 THEN 'Green'
    WHEN (current_value / target_value) >= 0.4 THEN 'Yellow'
    ELSE 'Red'
  END AS status
FROM okrs
WHERE quarter = 'Q2 2026'
ORDER BY progress_pct ASC;
```

**Pro Tip:** Use Metabase's "Question" feature to create reusable queries, then combine into dashboards.

---

### Option 3: Tableau / Power BI (Enterprise BI)

**Best for:** 100+ people with complex data sources (CRM, data warehouse)

**Setup:**
1. Connect to data sources (Salesforce, Snowflake, etc.)
2. Create calculated fields for KPIs
3. Build executive dashboard
4. Publish to Tableau Server / Power BI Service
5. Schedule automated refreshes

**Use Cases:**
- Executive dashboards (board-level reporting)
- Multi-source KPIs (sales from CRM, product from analytics, finance from ERP)
- Advanced analytics (trend analysis, cohort analysis)

**Cost:** $15-$70/user/month (Tableau) or $10-$20/user/month (Power BI)

---

## Integration Patterns

### Pattern 1: OKRs in Notion, KPIs in BI Tool

**When:** You want qualitative goals in Notion but quantitative dashboards in Looker/Tableau

**Setup:**
- Store OKRs in Notion (objectives, owners, confidence)
- Store KPI data in database (via ETL from CRM, analytics, etc.)
- Build dashboards in BI tool
- Link Notion OKR pages to dashboard URLs

**Example:**
```
Notion OKR Page:
  Objective: Achieve $5M ARR
    KR1: Close $2M net new ARR
      → Dashboard: [Link to Looker Sales Dashboard]
```

---

### Pattern 2: OKRs in Asana, KPIs Auto-Updated from Tasks

**When:** Your KRs are directly tied to task completion (e.g., "Launch 5 features")

**Setup:**
- Create Asana goal for KR: "Launch 5 features"
- Link 5 tasks (one per feature)
- Asana auto-calculates progress: 3/5 tasks done = 60% progress

**Use Cases:**
- Engineering OKRs (feature launches)
- Marketing OKRs (campaign launches)
- Operations OKRs (process improvements)

---

### Pattern 3: OKRs in Lattice, KPIs from Data Warehouse

**When:** Enterprise setup with dedicated OKR tool and data warehouse

**Setup:**
- Store OKRs in Lattice
- Build data pipelines to calculate KPIs (e.g., ARR from Salesforce → Snowflake)
- Use Lattice API to push KPI values into Lattice goals
- Auto-update weekly via scheduled job

**Example:**
```python
# Weekly cron job
def update_okr_progress():
    arr_current = get_arr_from_snowflake()
    arr_target = 5000000  # $5M
    progress = arr_current / arr_target

    lattice_api.update_goal(
        goal_id="okr-q2-2026-kr1",
        current_value=arr_current,
        progress=progress
    )
```

---

## Slack Integrations

### Weekly OKR Check-In Bot

**Tools:** Slack + Zapier or Slack + Custom Bot

**Setup:**
1. Every Monday 9am, bot posts to #okr-updates channel:
   ```
   🎯 Weekly OKR Check-In — May 6, 2026

   Please update your KRs:
   1. Progress % (0-100)
   2. Confidence (🟢🟡🔴)
   3. Blockers (if any)

   Reply in thread or update [Google Sheet / Notion]
   ```

2. Bot aggregates responses and posts summary by EOD

**Zapier Recipe:**
- Trigger: Schedule (every Monday 9am)
- Action: Send Slack message
- Action: Wait for responses
- Action: Update Google Sheet

**Custom Bot (Python):**
```python
import slack
import schedule

def weekly_checkin():
    client = slack.WebClient(token=SLACK_TOKEN)
    client.chat_postMessage(
        channel="#okr-updates",
        text="🎯 Weekly OKR Check-In..."
    )

schedule.every().monday.at("09:00").do(weekly_checkin)
```

---

## Email Digest (Weekly OKR Summary)

**Tools:** Google Apps Script + Gmail or Zapier

**Setup:**
1. Read OKR progress from Google Sheet
2. Generate HTML email with:
   - Overall score
   - 🟢🟡🔴 status per KR
   - Top blockers
3. Send to leadership every Friday 4pm

**Google Apps Script Example:**
```javascript
function sendWeeklyDigest() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Company OKRs");
  var data = sheet.getDataRange().getValues();

  var html = "<h2>Q2 2026 OKR Update</h2>";
  // ... build HTML from data

  MailApp.sendEmail({
    to: "leadership@company.com",
    subject: "Weekly OKR Update — " + new Date(),
    htmlBody: html
  });
}

// Trigger: Run every Friday at 4pm
```

---

## CRM Integration (Salesforce → OKRs)

**Use Case:** Sales OKR KRs pull data from Salesforce (e.g., "Close $2M ARR")

**Option 1: Manual (Small Teams)**
- Weekly: Export Salesforce report (Closed Won This Quarter)
- Sum total, update Google Sheet or Notion

**Option 2: Automated (Using Zapier)**
- Trigger: Salesforce opportunity closed/won
- Action: Update Google Sheet row (add to running total)

**Option 3: Automated (Using ETL Pipeline)**
- Fivetran or Stitch: Salesforce → Data Warehouse
- dbt: Transform data (calculate ARR this quarter)
- Reverse ETL (Hightouch or Census): Push ARR back to Lattice or Notion

---

## Implementation Roadmap

### Week 1: Setup Foundation
- [ ] Choose tool stack (Sheets / Notion / Asana)
- [ ] Create OKR tracker template
- [ ] Add company OKRs for current quarter
- [ ] Assign owners

### Week 2: Build Dashboard
- [ ] Set up dashboard (Data Studio / Metabase / Built-in)
- [ ] Add all KRs with current values
- [ ] Set up progress calculations
- [ ] Add RAG status indicators

### Week 3: Automate Updates
- [ ] Connect data sources (CRM, analytics)
- [ ] Set up weekly Slack reminders
- [ ] Test automation (does it work?)

### Week 4: Launch
- [ ] Train team on how to update progress
- [ ] Hold first weekly check-in
- [ ] Iterate based on feedback

---

## Tool Recommendations by Use Case

### For Startups (5-20 People)
**Recommended:** Google Sheets + Notion + Slack
- **Cost:** $0-$100/month
- **Why:** Simple, flexible, free/cheap
- **Setup time:** 1-2 hours

### For Growing Companies (20-100 People)
**Recommended:** Notion or Asana + Metabase + Slack
- **Cost:** $500-$2K/month
- **Why:** Scales well, good UX, integrations
- **Setup time:** 1-2 days

### For Mid-Market (100-500 People)
**Recommended:** Lattice or 15Five + Tableau + Slack
- **Cost:** $5K-$15K/month
- **Why:** Purpose-built, enterprise features, compliance
- **Setup time:** 2-4 weeks

### For Enterprise (500+ People)
**Recommended:** Workday Adaptive Planning or BetterWorks + Tableau + Microsoft Teams
- **Cost:** $20K+/month
- **Why:** Full performance management suite, advanced analytics
- **Setup time:** 1-3 months

---

## Anti-Patterns to Avoid

| Anti-Pattern | Why It's Bad | Fix |
|--------------|--------------|-----|
| **Too many tools** | 5 different systems = no one uses any | Pick 2-3 max |
| **Over-automation** | Breaks when data sources change | Start manual, automate what's painful |
| **Complex dashboards** | 50 metrics = information overload | Max 10-15 KPIs per dashboard |
| **Update once per quarter** | Goals go stale | Weekly updates minimum |
| **Data in email / Slack** | Not searchable or persistent | Use a system of record |

---

## Quick Start: 30-Minute Setup

**For small teams (5-20 people) who want to start TODAY:**

1. **Create Google Sheet** (10 min)
   - Copy template above
   - Add your Q2 OKRs

2. **Set up Slack reminder** (5 min)
   - Use Slack workflow builder
   - Post reminder every Monday 9am

3. **Create Notion page** (10 min)
   - Embed Google Sheet
   - Add weekly check-in template

4. **Schedule first check-in** (5 min)
   - Monday 9am, 15 minutes
   - Calendar invite with Google Sheet link

**Done. You now have a functional OKR system.**

---

## Resources

### Templates
- Google Sheets OKR Tracker: [Link in README]
- Notion OKR Workspace: [Duplicate template]
- Asana Project Template: [Asana Template Gallery]

### Integrations
- Zapier: [zapier.com](https://zapier.com)
- Slack API: [api.slack.com](https://api.slack.com)
- Metabase: [metabase.com](https://metabase.com)

### Tutorials
- Google Data Studio: [YouTube Tutorial]
- Notion Databases: [Notion Help Center]
- Asana Goals: [Asana Guide]

---

The best tool is the one your team will actually use. Start simple, automate later, iterate based on what's painful.
