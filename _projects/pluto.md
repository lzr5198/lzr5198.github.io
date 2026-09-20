---
name: "Pluto: AI Harness for DeFi Trading Wallet"
collection: projects
date: 2026-06-01
end_date: present
place:
technologies: ["TypeScript", "Zod", "DeFi", "Tool Calling"]
details: ["Building a self-hosted DeFi trading agent. Each cycle collects market data and news, retrieves relevant history, and produces a cited buy, sell, or hold for every configured pair. Strategy and security checks run before signing; trades can wait for approval or auto-execute, and a failure on one chain does not take down the others.", "The agent runs on a custom TypeScript tool-calling harness over an OpenAI-compatible chat API, with Zod-validated structured outputs and schema-guided repair. Tools are allowlisted (on-chain quoting, wallet balances, and similar). The runtime enforces turn, call, and cost budgets, plus security hooks for denial, re-decision, and approval.", "Supports three aggression levels — conservative, balanced, and aggressive — that shape how the agent styles its decisions. The matching prompt is injected into the decide system prompt from the user's configuration."]
links: ["https://github.com/lzr5198/pluto"]
link_types: ["github"]
---
