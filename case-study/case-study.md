# CloudWatch Omni
## Redesigning Incident Investigation for the AI-Native Era

**Case Study · Observability · Amazon Web Services**

---

| | |
|---|---|
| **Role** | Sr. UX Designer — Observability, SSOG |
| **Scope** | End-to-end: IA, interaction design, agentic workflows, design system, usability validation |
| **Timeline** | 10 months · Sep 2025 – Present |
| **Platform** | Web · Enterprise SaaS · Millions of AWS customers |
| **Primary Outcome** | ~73% reduction in mean time to resolution vs. industry average |

---

## TL;DR

Incident investigation in observability is fundamentally broken. Operators spend 30–90 minutes per incident manually correlating metrics, logs, and traces across disconnected dashboards. They know the answer exists in their data — but finding it requires expert-level navigation through fragmented tooling while the clock runs on their SLA.

I led the UX design of CloudWatch Omni — an AI-native investigation platform that replaces the dashboard-centric model with an agentic workspace. Instead of operators hunting for signals, the AI agent proactively surfaces anomalies, correlates telemetry, and suggests resolution paths — while keeping the human in command of every critical decision.

The result: a 5-minute target mean time to resolution — compared to the 30–90 minute industry average. From reactive dashboard-flipping to proactive, agent-assisted decision-making.

**What makes this case study worth reading:** This wasn't about adding AI features to an existing console. It was about redesigning the fundamental interaction model for how humans and AI collaborate during high-stakes, time-critical operations.

---

## The Industry Problem: Manual Investigation at Scale

### What Operators Actually Do During an Incident

When an SLO breach fires at 2 AM, here's what an experienced operator currently does:

1. **Detect** — receive an alert (PagerDuty, SNS, Slack) — 1-5 min
2. **Orient** — open monitoring dashboard, identify which service is affected — 5-15 min
3. **Correlate** — manually switch between metrics, logs, traces, and service maps to identify the blast radius — 15-45 min
4. **Diagnose** — compare deployment timelines, config changes, and dependency health — 10-30 min
5. **Resolve** — execute a rollback, scale-out, or config fix — 5-10 min
6. **Verify** — confirm recovery across affected services — 5-10 min

Total: **40–115 minutes** of mostly manual signal correlation. The actual *decision* — "roll back the deployment" — takes 30 seconds. Everything else is finding the evidence to make that decision confidently.

### Why AI Changes the Equation

The breakthrough isn't replacing the operator's judgment. It's eliminating the 30-90 minutes of manual correlation that precedes their decision. An AI agent that can:

- Proactively detect anomalies before alerts fire
- Correlate telemetry signals across services automatically
- Surface the probable root cause with supporting evidence
- Suggest resolution actions and execute on confirmation

...compresses a 90-minute investigation into a 5-minute decision. The human still decides. The AI does the legwork.

### The Competitive Landscape

The market recognized this simultaneously. In early 2026:

- **Datadog** acquired Eppo — built experimentation directly into observability, combining business metrics with system health
- **Splunk** converged AI monitoring with security — hallucination detection, bias drift, and PII leakage visible alongside traces
- **ServiceNow** launched AI Gateway — MCP control plane with automatic blocking of unapproved AI actions
- **Google** made voice + camera the default search input — the text box is no longer the assumed entry point

Q1 2026 security and observability financing hit $3.8B — the highest in three years. The industry isn't debating whether AI belongs in observability. It's racing to own the interaction model.

---

## My Role & Scope

### What I Owned

- **Agentic investigation experience** — the AI interaction model, proactive suggestion patterns, and human-in-the-loop confirmation flows
- **Session-based collaboration** — designing how multiple operators and AI agents collaborate during live incidents (iterated through 3 versions)
- **Service topology and context** — how operators understand blast radius and navigate between correlated signals
- **Landing experience** — the AI-first homepage that surfaces insights before operators ask
- **Information architecture** — the structural model for how investigation flows are organized and navigated
- **Design system leadership** — built Rhythm Core, the shared component library serving 12 designers across 5 product domains (Observability, Security, Governance, OpenSearch, AgentWatch)
- **Usability validation** — planned and conducted user testing rounds to validate and refine the experience

### Team Structure

- 3 designers on Observability (my domain)
- 2 on Security, 2 on Governance, 3 on OpenSearch, 2 on AgentWatch
- Close collaboration with engineering, PM, and the Core design system team

---

## Design Principles: The AI Interaction Model

Before building features, I established principles for how AI should behave in a high-stakes investigation context. These weren't theoretical — they were directly derived from understanding how operators work and where AI creates value vs. friction.

---

**◆ Principle 1 — Agent as thought partner, not autopilot**

AI proactively observes, correlates, and surfaces — but waits for explicit human confirmation before taking any critical action. An AI that rolls back a production deployment without asking isn't helpful. It's dangerous.

The interaction pattern: AI *suggests* resolution paths with supporting evidence. The operator *decides*. AI *executes* on confirmation. This keeps the human in command while eliminating the hours of correlation work that precedes their decision.

*Grounded in: "Divide tasks between human and AI deliberately, not by default" — Agentic XD principles*

---

**◆ Principle 2 — Proactive, not reactive**

The old model: operator receives alert → opens dashboard → starts investigating from zero.

The new model: AI has already been investigating. When the operator arrives, the probable root cause is surfaced, supporting evidence is assembled, and resolution options are ready. The operator's first interaction is a *decision*, not a *search*.

This reframes the design surface entirely — from "how do I show the operator their data" to "how do I present the agent's analysis in a way that builds confidence for rapid decision-making."

---

**◆ Principle 3 — Context follows the investigation**

Service name, time range, blast radius, and correlation state persist across every surface. An operator who drills into a trace and then returns to the topology view finds everything exactly as they left it. Context is never lost, never requires re-entry.

*Grounded in: "Never ask for information the system already has; context must persist across sessions" — IxD principles*

---

**◆ Principle 4 — One room, many participants**

During a production incident, 3-5 engineers often collaborate simultaneously. The AI agent is another participant in that collaboration — not a separate tool accessed through a different interface.

Humans and AI share a single investigation stream. Invoke AI with @AI. Share context with a deep link. No mode-switching between "team communication" and "AI interaction."

---

## Design Solution: The Agentic Investigation Workspace

### 1. The Launchpad — Work Begins Before You Arrive

The old model: operator opens a blank dashboard and decides what to look at.

The new model: the AI agent has been monitoring continuously. When the operator opens Omni, they're greeted with proactive insights — anomalies detected, services degrading, SLOs at risk — alongside fleet health and recent sessions ready to resume.

The key design decision: surface *actionable intelligence*, not raw data. Each insight card carries a recommendation ("Investigate this deployment" / "Escalate to PaymentService team") so the operator's first action is a decision, not a query.

`[ Screenshot: Agentic Launchpad — proactive insights panel · fleet health summary · recent sessions ]`

---

### 2. Sessions — Persistent, Collaborative Investigation

Each investigation is a session — a persistent workspace where the agent, the user, and their collaborators work together. Sessions auto-create on first interaction (no upfront structuring required), capture full context automatically (every metric, log, trace, and AI suggestion), and are shareable via deep link.

The critical design insight: operators return to investigations 48-72 hours later during post-mortems. Nothing can ever be lost. History isn't a feature — it's a structural requirement.

`[ Screenshot: Order Application Incident session — service topology + unified chat + investigation canvas ]`

---

### 3. Collaborative Workflows — Human + AI in One Stream

I iterated through three collaboration models to find the right balance:

| Version | Model | Learning |
|---------|-------|----------|
| V1 | Separate Team/AI channels · Private messages · Role management | Operators don't want mode-switching during a crisis. Two channels splits attention. |
| V2 | Unified chat · @AI mentions · Proactive AI suggestions | Right direction — AI as a participant, not a tool. But invite flow too heavy for fast incidents. |
| **V3 — Final** | Unified chat · @AI invoke · AI waits for confirmation · Shareable deep link only | Simple · Clear human-in-the-loop · Zero friction to collaborate |

**The V3 insight:** During real incidents, operators don't open a settings panel to invite collaborators. They paste a link in Slack. The entire invite flow was replaced with a single shareable URL.

**AI interaction in V3:**
- AI observes the conversation silently
- When relevant, surfaces a suggestion card: *"Rolling back PaymentService to v1.4.1 would restore the 30s timeout. I can initiate if you confirm."*
- Presents action buttons: `[ Yes, roll back ]` `[ Let me check first ]`
- Only executes after explicit user confirmation
- Shows attribution: *"✦ AI · responding to Sarah's @AI request"*

`[ Screenshot: V3 — AI suggestion card with action buttons · user confirmation · execution result ]`

---

### 4. Service Topology — Blast Radius at a Glance

A dynamic service map shows the blast radius of active incidents in real-time. Every service node is interactive — clicking reveals an integrated panel with metrics, logs, traces, alarms, and dependencies in a single view.

The design philosophy: investigation follows the *entity* (the service), not the *data type* (metrics vs. logs vs. traces). An SRE diagnosing the Order Service needs all signals in one place — not spread across four navigation levels.

`[ Screenshot: Service topology map · SLO breach indicator · integrated signal panel on node selection ]`

---

### 5. TimeRangePicker — Purpose-Built for Observability

Designed and built a time range component specifically for observability workflows:
- Button grid for common relative ranges (5m, 15m, 1h, 6h, 1d, 1w)
- Calendar for absolute range selection with range highlighting
- Auto-refresh interval control
- Full timezone support with live preview

Not a generic date picker — an observability tool that understands how operators think about time during investigations.

`[ Screenshot: TimeRangePicker — Relative mode · Absolute mode with range calendar ]`

---

### 6. Rhythm Core — Design System at Scale

12 designers across 5 product domains needed a shared design language. I led the creation of Rhythm Core — a component library built on Cloudscape Core with a custom theming token layer.

Rhythm Core is governed as a product, not maintained as a project:
- Own roadmap and versioning
- Cross-team governance with domain representatives
- Design tokens as single source of truth
- Rapid prototyping pipeline with **Kiro IDE** for AI-assisted component design and live preview

The argument that secured investment: *"Every hour a domain team spends rebuilding a date picker is an hour not spent on investigation experience."*

`[ Screenshot: Rhythm Core — component library · token documentation · multi-domain usage ]`

---

## Validation & Iteration

### Usability Testing — Validating the Paradigm

Conducted moderated usability testing with 5 internal AWS engineers (Principal SDEs, Senior Engineers, Specialists) — all with zero prior Omni experience. 15 tasks mapped to real incident response workflows.

The study validated the agentic investigation model while surfacing refinement opportunities in the experience details — navigation patterns, entry points, and AI interaction affordances were iteratively improved based on findings.

**Key validations:**
- Operators responded positively to proactive AI surfacing (the agent doing work before they arrived)
- The session model was immediately understood once auto-creation was demonstrated
- Collaborative deep links were used naturally without explanation
- AI suggestion + confirmation pattern built trust rapidly

**Areas refined post-testing:**
- Streamlined navigation between correlated signals
- Added co-located entry points for logs/traces on service pages
- Improved AI suggestion timing and context delivery

*29 findings · 11 critical improvements shipped in 2 weeks · Aggressive re-testing cycles in progress*

---

## Outcomes

| Metric | Value | Context |
|---|---|---|
| Target MTTR with agent assist | **~5 min** | vs. 30–90 min industry average — **73% reduction** |
| Product domains on Rhythm Core | **5 of 5** | Unified design language across all Omni surfaces |
| Designers on shared system | **12** | Cross-domain coherence without cross-domain meetings |
| Usability improvements shipped | **11 critical fixes in 2 weeks** | Rapid validation-to-fix cycle |
| Collaboration model iterations | **3 versions** | From heavy role management to zero-friction deep links |

### The Number That Matters

A 73% reduction in mean time to resolution isn't a UX metric. It's a business outcome. For enterprise customers running production microservices, the difference between a 90-minute and a 5-minute MTTR is measurable in SLA compliance, engineering hours, and customer trust.

The operator still makes the decision. The AI eliminates the 85 minutes of manual work that used to precede it.

---

## Cross-Functional Collaboration

### Engineering Partnership

The investigation surface involved real-time data streams, persistent session state, and complex AI interaction patterns. I involved engineering leads from sprint kickoff — not handoff — because AI interaction constraints are *design constraints*.

Key collaboration outcome: a shared AI decision taxonomy across the design and engineering teams — *observe* (no confirmation), *suggest* (user accepts), *execute* (requires explicit confirmation). This framework now governs all agentic features across Omni.

### AgentCore Alignment

The agentic model was co-developed with an adjacent team. I initiated a joint design working session that aligned both surfaces on what the agent could proactively trigger, what required confirmation, and what it could never do autonomously. This became the shared framework for AI interaction across both products.

### Handoff Artifacts

- Figma Dev Mode specs with interaction annotations and state documentation
- Design token documentation (Rhythm Core)
- Edge case library: 40+ documented states (error, empty, loading, degraded-data)
- Microcopy guidelines for AI-generated content

---

## What I'd Do Differently

**1. Test conceptual models before interfaces.**

We built around "threads" as an organizing concept for months before learning operators think in *incidents*, not *threads*. Earlier concept testing — before any UI — would have caught this in week two. The lesson: when introducing a new paradigm, test the *mental model* separately from the *interface*.

**2. Formalize cross-org design authority early.**

The AgentCore alignment produced good outcomes but was initiated informally. As GA pressure mounted, design decisions with cross-org implications needed governance structures that didn't exist yet. Joint design committees should be proposed at project kickoff, not mid-execution.

---

## Process & Tools

| Area | Approach |
|---|---|
| **Exploration** | Figma — wireframing, component design, prototyping, design system |
| **Rapid Prototyping** | **Kiro IDE** — AI-assisted code generation, live component preview, design-to-code translation for interactive validation before engineering handoff |
| **Validation** | Moderated usability testing · DesignBrain automated audits · Cross-team design reviews |
| **Systems** | Rhythm Core (Cloudscape Core + custom design tokens) · Single source of truth for 12 designers across 5 domains |

---

*Detailed artifacts, session recordings, and Figma files available under NDA on request.*

---

> **Mega · Sr. UX Designer · AWS**
> Designing complex, high-stakes, AI-native products at scale.
